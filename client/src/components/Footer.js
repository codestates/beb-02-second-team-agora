import React from 'react';
import { Link } from 'react-router-dom';
import 'flowbite';

const Footer = () => {
	return (
		<>
			<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
				{/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline" target="_blank">Flowbite™</a>. All Rights Reserved.
				</span> */}
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Team Agora All Rights Reserved.
				</span>
				<ul class="flex flex-wrap items-center mt-3 sm:mt-0">
					{/* <li>
						<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
					</li>
					<li>
						<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
					</li> */}
					<li>
						<a href="https://github.com/codestates/beb-02-second-team-agora" class="text-sm text-gray-500 hover:underline dark:text-gray-400">GitHub</a>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;