/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import {background} from "../../../../wp-includes/js/codemirror/csslint";


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {

	const { content, align, backgroundColor, cbLinkColor, cbLinkBackground, textColor, cbLink, linkLabel, hasLinkNofollow } = attributes;

	const blockProps = useBlockProps.save( {
		className: `has-text-align-${ align }`
	} );

	return (
		<div
			{ ...blockProps }
			style={ { backgroundColor: backgroundColor } }
		>
			<p { ...useBlockProps.save() }>
				{ 'Instructor Block – hello from the saved content!' }
			</p>



			<RichText.Content
				tagName="p"
				value={ content }
				style={ { color: textColor } }
			/>
			<p>

				<a
					href={ cbLink }
					className="cb-button"
					style={ { textAlign: align, cbLinkBackground, backgroundColor: backgroundColor, color: cbLinkColor } }
					rel={ hasLinkNofollow ? "nofollow" : "noopener noreferrer" }
				>
					{ linkLabel }
				</a>
			</p>
		</div>
	);
}
