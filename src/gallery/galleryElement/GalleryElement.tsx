import React from 'react'
import style from './GalleryElement.module.scss'

type TGalleryElement = {

}

interface IGalleryElement {

}

const GalleryElement: React.FC<IGalleryElement> = (props: IGalleryElement) => {

	return (
		<div>

			<h1 className={style.firstElement}>Hello, I'm GalleyElement</h1>

		</div>
	)
}

export default GalleryElement 