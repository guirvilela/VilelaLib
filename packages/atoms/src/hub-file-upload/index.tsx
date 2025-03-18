import React from 'react';

import { useI18nMessage } from '@hubert/i18n';
import IconImage from './icon-image';
import {
  FileUploadExtStyle,
  FileUploadIconStyle,
  FileUploadInputStyle,
  FileUploadLoadingStyle,
  FileUploadOverlayStyle,
  FileUploadStyle,
  FileUploadTitleColorStyle,
  FileUploadTitleStyle
} from './styles';
import { HubFileUploadProps } from './types';

export type { HubFileUploadProps };

export function HubFileUpload({
  disabled: globalDisabled,
  loading: globalLoading,

  value,
  onChange,
  element,
  ...props
}: HubFileUploadProps) {
  const t = useI18nMessage();

  const [source, setSource] = React.useState(value);
  const [canDrop, setCanDrop] = React.useState<boolean>(false);
  const [innerLoading, setInnerLoading] = React.useState(false);

  const loading = React.useMemo(
    () => globalLoading || innerLoading,
    [globalLoading, innerLoading]
  );

  const disabled = React.useMemo(
    () => globalDisabled || globalLoading || innerLoading,
    [globalDisabled, globalLoading, innerLoading]
  );

  const ref = React.useRef<HTMLInputElement>();

  const handleChange = React.useCallback(
    async (files: File[]) => {
      if (disabled) return;

      setSource(files);

      const result = onChange?.(files);
      if (result instanceof Promise) {
        setInnerLoading(true);
        result.finally(() => setInnerLoading(false));
      }
    },
    [disabled, onChange]
  );

  React.useEffect(() => {
    setSource(value);
  }, [value]);

  return (
    <>
      <FileUploadStyle
        {...props}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!canDrop && !disabled) setCanDrop(true);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCanDrop(false);

          handleChange?.(Array.from(e.dataTransfer.files || []));
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!disabled) {
            ref.current?.click();
          }
        }}
        hide={!!element}
        disabled={disabled}
      >
        <FileUploadIconStyle>
          <IconImage />
        </FileUploadIconStyle>
        {canDrop
          ? t('hub-file-upload_title-drop')
          : props.title || (
              <FileUploadTitleStyle>
                {source?.[0] ? (
                  source.length > 1 ? (
                    <>
                      <FileUploadTitleColorStyle>
                        {source.length}
                      </FileUploadTitleColorStyle>
                      {t('hub-file-upload_selected-multi')}
                    </>
                  ) : (
                    <>
                      {t('hub-file-upload_selected')}
                      <FileUploadTitleColorStyle>
                        {source[0].name}
                      </FileUploadTitleColorStyle>
                    </>
                  )
                ) : (
                  <>
                    <FileUploadTitleColorStyle>
                      {t('hub-file-upload_title-blue')}
                    </FileUploadTitleColorStyle>
                    {t('hub-file-upload_title-content')}
                  </>
                )}
              </FileUploadTitleStyle>
            )}
        {source?.[0] ? (
          <FileUploadExtStyle
            onClick={(e) => {
              e.stopPropagation();
              handleChange?.([]);
            }}
          >
            {t('hub-file-upload_remove')}
          </FileUploadExtStyle>
        ) : (
          <FileUploadExtStyle>
            {t('hub-file-upload_ext-title')}
            {props.extensions}{' '}
            {props.size && (
              <>
                {t('hub-file-upload_ext-content')}
                {props.size}
              </>
            )}
          </FileUploadExtStyle>
        )}
        <FileUploadInputStyle
          ref={ref as never}
          type="file"
          accept={props.accept}
          multiple={props.multiple}
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            handleChange?.(files);

            e.target.value = '';
          }}
        />
        {loading && (
          <FileUploadOverlayStyle>
            <FileUploadLoadingStyle />
          </FileUploadOverlayStyle>
        )}
      </FileUploadStyle>
      {React.isValidElement(element) &&
        React.cloneElement(element, {
          ...element.props,
          onClick: () => {
            if (!disabled) {
              ref.current?.click();
            }
          }
        })}
    </>
  );
}
