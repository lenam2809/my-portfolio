'use client';

import { useTranslations } from 'next-intl';
import { Text } from '@once-ui-system/core';

export function SublineText() {
    const t = useTranslations('HomePage');
    const tPerson = useTranslations('Person');

    return (
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            {t.rich('subline', {
                name: () => <strong>{tPerson('name')}</strong>,
                br: () => <br />
            })}
        </Text>
    );
}
