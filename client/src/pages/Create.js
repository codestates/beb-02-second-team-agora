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
					<div className="input_img" onClick={{}}>
						<p className="font-bold">Image, Video, Audio, or 3D Model<span className="text-red-500"> *</span></p>
						<p className="font-semibold text-sm text-zinc-500">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
						<button className="border-2 border-dashed border-slate-300 rounded-lg w-80 h-60 my-5 flex flex-row items-center justify-center" />
					</div>
			</div>
        </div>
	);

}

export default Create;