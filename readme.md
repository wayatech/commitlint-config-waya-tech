# Read me
## Install
Add the package in your *devDependencies*

````
"commitlint-config-waya-tech": "git@github.com:wayatech/commitlint-config-waya-tech.git"
````

## Configure
In your _commitlint.config.js_ file : extend from this config

```
module.exports = {
  extends: ['waya-tech'],
};

```

or if you're really lazy
```
echo "module.exports = {extends: ['waya-tech']}" > commitlint.config.js
```
