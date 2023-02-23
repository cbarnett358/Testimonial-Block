/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
	FontSizePicker

} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink} from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {background} from "../../../../wp-includes/js/codemirror/csslint";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();

	const { content, align, myFontSizePicker, cbLinkBackground, backgroundColor, cbLinkColor, textColor, cbLink, linkLabel, hasLinkNofollow, alt } = attributes;


	const fontSizes = [
		{
			name: __( 'Small' ),
			slug: 'small',
			size: 12,
		},
		{
			name: __( 'Big' ),
			slug: 'big',
			size: 26,
		},
	];
	const fallbackFontSize = 16;

	const MyFontSizePicker = () => {
		const [ fontSize, setFontSize ] = useState( 12 );

		return (
			<FontSizePicker
				__nextHasNoMarginBottom
				fontSizes={ fontSizes }
				value={ fontSize }
				fallbackFontSize={ fallbackFontSize }
				onChange={ ( newFontSize ) => {
					setFontSize( newFontSize );
				} }
			/>
		);
	};

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}
	const onChangeAlign = ( newAlign ) => {
		setAttributes( {
			align: newAlign === undefined ? 'none' : newAlign,
		} )
	}
	const onChangeBackgroundColor = ( newBackgroundColor ) => {
		setAttributes( { backgroundColor: newBackgroundColor } )
	}

	const onChangeTextColor = ( newTextColor ) => {
		setAttributes( { textColor: newTextColor } )
	}
	const onChangeCbLinkBackground = ( newCbLinkBackground ) => {
		setAttributes( { cbLinkBackground: newCbLinkBackground } )
	}


	const onChangeCbLink = ( newCbLink ) => {
		setAttributes( { cbLink: newCbLink === undefined ? '' : newCbLink } )
	}

	const onChangeCbLinkColor = ( newCbLinkColor ) => {
		setAttributes( { cbLinkColor: newCbLinkColor } )
	}

	const onChangeLinkLabel = ( newLinkLabel ) => {
		setAttributes( { linkLabel: newLinkLabel === undefined ? '' : newLinkLabel } )
	}

	const toggleNofollow = () => {
		setAttributes( { hasLinkNofollow: ! hasLinkNofollow } )
	}

	return (
		<div{...blockProps}>

			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color settings', 'cb-instructors' ) }
					initialOpen={ false }
					colorSettings={ [
						{

							value: textColor,
							onChange: onChangeTextColor,
							label: __( 'Text color', 'cb-instructors' )
						},
						{
							value: cbLinkColor,
							onChange: onChangeCbLinkColor,
							label: __( 'Link color', 'cb-instructors' )
						},
						{
							value: cbLinkBackground,
							onChange: onChangeCbLinkBackground,
							label: __( 'Link background', 'cb-instructors' )
						},
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __( 'Background color', 'cb-instructors' )
						}
					] }
				/>
				<PanelBody
					title={ __( 'Link Settings', 'cb-instructors' )}
					initialOpen={true}

				>


					<PanelRow>

						<fieldset>
							<TextControl
								label={__( 'CB link', 'cb-instructors' )}
								value={ cbLink }
								onChange={ onChangeCbLink }
								help={ __( 'Add your own link', 'cb-instructors' )}
							/>

						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>

							<TextControl
								label={__( 'Link label', 'cb-instructors' )}
								value={ linkLabel }
								onChange={ onChangeLinkLabel }
								help={ __( 'Add link label', 'cb-instructors' )}
							/>

						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Add rel = nofollow"
								help={
									hasLinkNofollow
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={ hasLinkNofollow }
								onChange={ toggleNofollow }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentControl
					value={ align }
					onChange={ onChangeAlign }
				/>
			</BlockControls>
			<div>
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( img ) => setAttributes({imgUrl: img.sizes.thumbnail ? img.sizes.thumbnail.url : img.sizes.full.url})}
							allowedTypes={ 'imageUrl' }
							render={ ( { open } ) => (
								<img src={attributes.imgUrl} onClick={ open } height={100} width={100} alt={alt}/>
							) }
						/>
					</MediaUploadCheck>

					<RichText

						tagName="p"
						onChange={ onChangeContent }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						value={ content }
						placeholder={ __( 'Write your text...' ) }
						style={ { textAlign: align, backgroundColor: backgroundColor, color: textColor } }
					/>
					<ExternalLink
						href={ cbLink }

						className="cb-button"
						style={ { cbLinkBackground, textAlign: align, backgroundColor: backgroundColor, color: cbLinkColor } }
						rel={ hasLinkNofollow ? "nofollow" : "" }
					>
						{ linkLabel }
					</ExternalLink>
				</div>
			</div>

		</div>
	);
}
