import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl, ColorPalette, ColorPicker} from "@wordpress/components";
import {select} from "@wordpress/data";

export class BlockSettings extends React.Component {
	render(){
		console.log('PROPS!', this.props);
		let {attributes, setAttributes} = this.props;
		let settings = select('core/editor').getEditorSettings();
		console.log('SETTINGS')


		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						<SelectControl
							label="Link Background Color"
							value={attributes.backgroundColorClass}
							onChange={backgroundColorClass => setAttributes({backgroundColorClass})}
							options={
								[
									{value: '', label: 'Default'},
									{value: 'bg-primary-blue', label: 'Primary Blue'},
									{value: 'bg-primary-blue', label: 'Primary Red'},
								]}
						/>
					</PanelRow>
					<PanelRow>
						Border Color
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={
								[
									{name: 'blue', color:'#0000FF'},
									{name: 'red', color:'#FF0000'}
								]
							}
							//if the brand has custom colors
							//disableCustomColors={true}
							value={attributes.borderColor}
							onChange={borderColor => setAttributes({borderColor})}
							/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							// onChangeComplete={textColor => {console.log('COLOR:' textColor);
							onChangeComplete={colorObj => {setAttributes({textColor: colorObj.hex})}}
							//disable transparent text
							disableAlpha
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)

	}
}
