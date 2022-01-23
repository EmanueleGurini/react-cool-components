import React from 'react'
import style from './GalleryElement.module.scss'
import { TEMPDATA } from './TEMP_DATA/TEMP_DATA'

interface IGalleryElement {

}



const GalleryElement: React.FC<IGalleryElement> = (props: IGalleryElement) => {

	const imgGallery = (imglink: string, imgAlt: string) => {
		return (
			<section className={style['card']}>
				<div className={style['card-container']} >
					<img src={imglink} alt={imgAlt} />
				</div>
			</section>
		)
	}

	return (
		<section className={style.gallery}>

			<h1 className={style.firstElement}>Hello, I'm GalleyElement</h1>

			<section className={style['gallery__cards']}>

				{

					TEMPDATA.map((img, index) => {

						return (

							<React.Fragment key={`card-${index}`}>

								{imgGallery(img.link, img.alt)}

							</React.Fragment>

						)

					})

				}

			</section>

		</section>
	)
}

export default GalleryElement 