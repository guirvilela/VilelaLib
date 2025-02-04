import React from 'react';

/**
 * Função utilizada para adicionar um layout pré-configurado em uma pagina (pode ser utilizada com composition)
 *
 * @example
 * export default compose(
 *   withLayout(DefaultLayout)
 * )(CadastroAreasPage);
 */
export function withLayout<P extends object>(
  LayoutElement: (props?: P) => JSX.Element,
  layoutProps?: P
) {
  return (Component) =>
    React.memo(function Layout(props) {
      return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <LayoutElement {...(layoutProps as any)}>
          <Component {...props} />
        </LayoutElement>
      );
    });
}
