import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { getTranslations, getMessages } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return Meta.generate({
    title: t('title'),
    description: t('description'),
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t('title'))}`,
    path: about.path,
  });
}

export default async function About({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const tPerson = await getTranslations({ locale, namespace: 'Person' });
  const messages = await getMessages({ locale });
  const aboutData = (messages as any).About;
  const personData = (messages as any).Person;

  const structure = [
    {
      title: aboutData.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: aboutData.work.title,
      display: about.work.display,
      items: aboutData.work.experiences.map((experience: any) => experience.company),
    },
    {
      title: aboutData.studies.title,
      display: about.studies.display,
      items: aboutData.studies.institutions.map((institution: any) => institution.name),
    },
    {
      title: aboutData.technical.title,
      display: about.technical.display,
      items: aboutData.technical.skills.map((skill: any) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={t('title')}
        description={t('description')}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(t('title'))}`}
        author={{
          name: tPerson('name'),
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {tPerson('location')}
            </Row>
            {personData.languages && (
              <Row wrap gap="8">
                {personData.languages.split(',').map((language: string, index: number) => (
                  <Tag key={index} size="l">
                    {language.trim()}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={aboutData.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {tPerson('name')}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {tPerson('role')}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {t.rich('intro.description', {
                name: tPerson('name')
              })}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={aboutData.work.title} variant="display-strong-s" marginBottom="m">
                {aboutData.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {aboutData.work.experiences.map((experience: any, index: number) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: string, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={aboutData.studies.title} variant="display-strong-s" marginBottom="m">
                {aboutData.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {aboutData.studies.institutions.map((institution: any, index: number) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={aboutData.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {aboutData.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {aboutData.technical.skills.map((skill: any, index: number) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {/* Tags and images support can be re-added if data is moved to JSON or mapped from config */}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
