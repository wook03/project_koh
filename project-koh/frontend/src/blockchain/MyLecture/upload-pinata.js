import {Uploader} from './metadata_uploader'
const REACT_APP_PINATA_API_KEY="2ecfdfdeebe7f222ffef"
const REACT_APP_PINATA_API_SECRET="465bd8f4bddf38456e011ae4164f34a734bee415a1f9fc11124e3f300de2fc4e"

export const SendFileToIPFS = async (name,description,fileVideo) => {
	console.log(fileVideo.name);
	const formData = new FormData();
	formData.append("file", fileVideo);
	const config = {
		method: "POST",
		maxContentLength: Infinity,
		headers: {
			pinata_api_key: REACT_APP_PINATA_API_KEY,
			pinata_secret_api_key: REACT_APP_PINATA_API_SECRET,
		},
		body: formData,
	};
	const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", config);
	const data = await response.json();
	const ImgHash = `ipfs://${data.IpfsHash}`;
	// console.log(name,description,ImgHash);
	Uploader(name,description,ImgHash);
	//Take a look at your Pinata Pinned section, you will see a new file added to you list.   
}

	// const resFile = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
	// 	maxBodyLength: "Infinity",
	// 	headers: {
	// 		'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
	// 		pinata_api_key: REACT_APP_PINATA_API_KEY,
	// 		pinata_secret_key:REACT_APP_PINATA_API_SECRET
	// 	},
	// }).then((err) => {
	// 	const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
	// 	console.log(err);
	// 	console.log(ImgHash);
	// });