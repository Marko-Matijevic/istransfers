import React, { useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm';
import '@fancyapps/ui/dist/fancybox.css';

function Fancybox(props: any) {
	useEffect(() => {
		const opts = props.options || {};

		const delegate = props.delegate || '[data-fancybox]';
		NativeFancybox.bind(delegate, opts);

		return () => {
			NativeFancybox.destroy();
		};
	}, [props.delegate, props.options]);

	return <>{props.children}</>;
}

export default Fancybox;
