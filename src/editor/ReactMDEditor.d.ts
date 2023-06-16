import * as React from 'react';

export interface IEditorProps{
    value: string;
}

declare const ReactMDEditor: React.ForwardRefExoticComponent<IEditorProps & React.RefAttributes<any>>;
export default ReactMDEditor;