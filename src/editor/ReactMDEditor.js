import React, {forwardRef} from 'react';
import ReactMarkdown from "react-markdown";

const ReactMDEditor = forwardRef((props, ref) => {

	const { value } = props;

	return (
		<ReactMarkdown
			ref={ref}
			components={value}
			/*remarkPlugins={[remarkDirective, remarkExtendedTable]}
			rehypePlugins={[
					rehypeStringify,
					rehypeFormat,
					rehypeSlug,
			]}
			remarkRehypeOptions={{ handlers: Object.assign({}, extendedTableHandlers) }}
			components={components}*/
		/>
	);
});

export default ReactMDEditor;

ReactMDEditor.defaultProps = {
			value: '',
};
