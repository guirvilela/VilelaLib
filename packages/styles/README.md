# Hubert Styles Library

Esta biblioteca contem e deve somente conter codigos relacionados a estilos (e.g: styled-components e css).

- [Voltar para readme principal](../../README.md)

## Como usar

```
npm i @hubert/styles
```

No arquivo de entrada da aplicação faça o import do css principal:

```javascript
import '@hubert/styles/lib/styles.css';
```

### Fonts

**Não é recomendado recriar classes ou components que utilizem a fontes dessa lib diretamente**!
Para isso utilize o component `HubText` disponivel nas libs `@hubert/atoms`.

### Icones

Faça o import direto no component que estiver trabalhando e utilize o component HubIcon para instanciar o svg, exemplo:

```javascript
import IconLike from '@hubert/styles/lib/icons/icon-outline-like.svg';

<HubIcon icon={IconLike} color="primary" size="sm" />;
```

> Projetos criados a partir dos templates react desse monorepo, já estão preparados para lidar com esse tipo de import!

### Types

Tipo utilizados para manter coesão entre as duas implementações de components baseados no style-guide.

Keep calm and code on 🤘.
