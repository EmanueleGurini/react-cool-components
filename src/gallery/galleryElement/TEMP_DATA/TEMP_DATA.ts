interface IImg {
	link: string
	alt: string
}

let genre : Array<string> = ['nature', 'water', 'technology', 'food', 'sport', 'nation', 'afrika', 'nigeria', 'italy', 'cina'];

const getGenreImage = (genre : Array<string>) : string => {
	return genre[Math.floor(Math.random() * (genre.length - 0 + 1) + 0)]
}

const getImgLink = (category : string) : string => {
	return `https://source.unsplash.com/1600x900/?${category}`
}

export const TEMPDATA: Array<IImg> = [
	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	},
	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	},
	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	},
	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	},
	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	},	{
		link: getImgLink(getGenreImage(genre)),
		alt: 'img'
	}
]