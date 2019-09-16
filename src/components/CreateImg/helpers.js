function fit (cover) {
	return (parentWidth, parentHeight, childWidth, childHeight) => {
		const doRatio = childWidth / childHeight;
		const cRatio = parentWidth / parentHeight;
		let width = parentWidth;
		let height = parentHeight;

		if (cover ? (doRatio > cRatio) : (doRatio < cRatio)) {
			height = width / doRatio;
		} else {
			width = height * doRatio;
		}

		return {
			width,
			height,
			x: (parentWidth - width) / 2,
			y: (parentHeight - height) / 2
		};
	};
}

export const contain = fit(false)
export const cover = fit(true)