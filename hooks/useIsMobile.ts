import { useMediaQuery } from '@chakra-ui/react';
import { UserAgent } from 'next-useragent';
import { useState, useEffect } from 'react';

export const useIsMobile = (userAgent?: UserAgent): boolean => {
	const [isMobile, setIsMobile] = useState(false);
	const [mobileBreakpoint] = useMediaQuery('(max-width: 991px)', {
		ssr: true,
	});

	useEffect(() => {
		if (mobileBreakpoint) {
			setIsMobile(true);
		} else if (userAgent) {
			setIsMobile(userAgent.isMobile);
		} else if (!mobileBreakpoint) {
			setIsMobile(false);
		}
	}, [userAgent, mobileBreakpoint]);
	return isMobile;
};
