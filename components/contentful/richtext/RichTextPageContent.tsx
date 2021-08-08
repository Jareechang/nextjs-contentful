import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import * as types from './types';
import * as utils from './utils';

interface RichTextPageContentProps {
  richTextBodyField: types.RichTextBodyField;
};

const RichTextPageContent = (
  props: RichTextPageContentProps
): React.ReactNode => {
  const {
    richTextBodyField = null
  } = props;
  return documentToReactComponents(
    richTextBodyField?.json,
    utils.getRichTextRenderOptions(
      richTextBodyField?.links,
      null
    )
  );
}

export default RichTextPageContent;
