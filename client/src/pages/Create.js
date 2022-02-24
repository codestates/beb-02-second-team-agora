import React from 'react';
import 'flowbite'

const Create = () => {

	return(
        <div className="mx-auto  w-9/12">
			<div className="top mx-10 my-8">
                <h1 className="text-left font-bold text-4xl">Create New Item</h1>
            </div>
			<div className="bot text-left ml-10">
				<div className="mb-2">
						<span className="text-red-500">* </span>
						<span className="text-zinc-500 text-sm">Required Fileds</span>
					</div>
					<div className="input_img" onClick={'/'}>
						<p className="font-bold">Image, Video, Audio, or 3D Model<span className="text-red-500"> *</span></p>
						<p className="font-semibold text-sm text-zinc-500">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
						<button className="border-2 border-dashed border-slate-300 rounded-lg w-80 h-60 my-5 flex flex-row items-center justify-center">
						</button>
					</div>
				<div className="input_name mb-8">
					<p className="font-bold">Name <span className="text-red-500">*</span></p>
					<input onChange={'/'} value={''} className="border w-full h-10 rounded-lg px-3 mt-2" placeholder="item name"></input>
				</div>
				<div className="input_External_link mb-8">
                    <p className="font-bold">External Link </p>
                    <p className="text-slate-400 text-sm">BlueOcean will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                    <input onChange={'/'} value={''} className="border w-full h-10 rounded-lg px-3 mt-2" placeholder="https://yoursite.io/item/123"></input>
                </div>
                <div className="input_Description mb-8 border-b-2 pb-10">
                    <p className="font-bold">Description</p>
                    <p className="text-slate-400 text-sm">he description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <textarea onChange={'/'} value={''} className="border w-full h-20 rounded-lg px-3 mt-2" placeholder="Provide a detailed description of your item."></textarea>
                </div>
                <div className="input_name mb-8">
                    <p className="font-bold">Price</p>
                    <input onChange={'/'} type="Number" value={'price'} className="border w-2/12 h-10 rounded-lg px-3 mt-2" placeholder="Amount"></input>
                </div>
                <button onClick={'/'}
                    className="border rounded-lg hover:bg-blue-700 w-24 h-12 font-bold text-center text-white bg-blue-500 flex mb-10">
                    <p className="m-auto">Create</p>
                </button>
			</div>
        </div>
	);

}

export default Create;