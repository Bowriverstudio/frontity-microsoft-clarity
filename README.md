# `frontity-microsoft-clarity`

Analytics package to use [Microsoft Clarity](https://clarity.microsoft.com/) with Frontity

## Install

Add to `package.json`

```bash
npm install frontity-microsoft-clarity
```

## Frontity Settings

Update `frontity.settings.js`

```js
export default {
  packages: [
    {
      name: "frontity-microsoft-clarity",
      state: {
        microsoftClarity: {
          trackingCode: "yourcode"
        }
      }
    }
  ]
};
```

## Future Development

Add clarity plugin to wordpress, and make an endpoint.

Add an endpoint from the plugin - https://wordpress.org/plugins/microsoft-clarity/

## References
