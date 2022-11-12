import React from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { UserAgent } from 'next-useragent';
import { useIsMobile } from '../../hooks';

interface Props {
	userAgent: UserAgent;
}

export const Header: React.FC<Props> = ({ userAgent }: Props) => {
	const isMobile = useIsMobile(userAgent);

	return isMobile ? <MobileHeader /> : <DesktopHeader />;
};
