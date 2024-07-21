# Vilela Build-Lib Library

Esta biblioteca contem scripts reutilizavel para criação de outras bibliotecas e tambem todas as configurações necessarias para buildar e testar.

- [Voltar para readme principal](../../README.md)

## Como usar

```
npm i -D @vilela/build-lib
```

Adicione no `package.json`:

```json
{
  "scripts": {
    "dev": "vilela-lib dev",
    "prebuild": "vilela-lib prebuild",
    "build": "vilela-lib build",
    "test": "vilela-lib test",
    "test:update": "vilela-lib test-update",
    "test:ci": "vilela-lib test-ci",
    "lint": "vilela-lib lint",
    "prepack": "vilela-lib prepack"
  }
}
```

Keep calm and code on 🤘.
