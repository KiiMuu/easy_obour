import { useEffect, useCallback, useState } from 'react';

const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleEscKey = useCallback(
		(e) => {
			if (e.keyCode === 27) setIsOpen(!isOpen);
		},
		[isOpen, setIsOpen]
	);

	useEffect(() => {
		if (isOpen)
			document.addEventListener('keydown', handleEscKey, false, {
				once: true,
			});
	}, [handleEscKey, isOpen]);

	const handleToggle = () => setIsOpen(!isOpen);

	return { isOpen, handleToggle };
};

export default useToggle;