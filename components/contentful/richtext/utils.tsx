import * as React from 'react';
import {
  Typography
} from '@material-ui/core';

import { BLOCKS } from "@contentful/rich-text-types";

export const getRichTextRenderOptions = (links, options) => {
  return {
    renderMark: {},
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Typography
            variant="body1"
            color="textPrimary">
            {children}
          </Typography>
        )
      }
    }
  };
}
