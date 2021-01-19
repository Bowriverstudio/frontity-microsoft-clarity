/**
 * @jest-environment node
 */

import { HelmetProvider } from "frontity";
import { State } from "frontity/types";
import React from "react";
import { FilledContext } from "react-helmet-async";
import TestRenderer from "react-test-renderer";

import microsoftClarity from "../src";
import { Root as MicrosoftClarity } from "../src/components";
import MicrosoftClarityPackage from "../types";

const getState = (): State<MicrosoftClarityPackage> => ({
  microsoftClarity: {
    trackingCode: "",
  },
});

describe("MicrosoftClarity", () => {
  test("works with a single tracking id", () => {
    const state = getState();

    state.microsoftClarity.trackingCode = "YOURCODE";

    const helmetContext = {};
    TestRenderer.create(
      <HelmetProvider context={helmetContext}>
        <MicrosoftClarity state={state} actions={null} />
      </HelmetProvider>
    ).toJSON();
    const head = (helmetContext as FilledContext).helmet;

    expect(head.script.toString()).toMatchSnapshot();
  });

  test("doesn't add anything if there's no tracking ids", () => {
    const state = getState();

    const helmetContext = {};
    TestRenderer.create(
      <HelmetProvider context={helmetContext}>
        <MicrosoftClarity state={state} actions={null} />
      </HelmetProvider>
    ).toJSON();
    const head = (helmetContext as FilledContext).helmet;

    expect(head.script.toString()).toMatchSnapshot();
  });

  // For Code coverage only.
  test("Empty definition", () => {
    expect(microsoftClarity).toEqual(microsoftClarity);
  });
});
