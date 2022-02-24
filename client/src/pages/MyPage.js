import React from 'react';
import 'flowbite';

const MyPage = () => {

	return (
		<div className='MyPage'>
			{/* flex flex-col = 수직 배치, space-y-20 = 간격마다 20씩, m-20 = 모든방향 마진 20 */}
			<div class="flex justify-center p-5 m-5">
				{/* https://tailwindcss.com/docs/width w-1/4 = 퍼센티지로 사이즈 조절(25%) */}
				<div class="border rounded-lg p-2.5 m-2.5 w-1/2">
						<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload image file</label>
						<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
						<div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
				</div>
			</div>
			<div class="flex justify-center p-5 m-5">
				<div class="border rounded-lg p-2.5 m-2.5 w-1/4">
					<div class="relative z-0 mb-6 w-full group">
						<input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-center" placeholder="E-mail" required="" />
					</div>
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
				</div>
			</div>
		</div>
	);

}

export default MyPage;