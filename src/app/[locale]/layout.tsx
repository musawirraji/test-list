import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { ScrollToTopButton } from "@/components";
import { PostsProvider, UsersProvider } from "@/contexts";
import { comfortaa } from "@/fonts";
import { Local } from "@/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);

  if (!routing.locales.includes(locale as Local)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${comfortaa.className} m-0`}>
        <NextIntlClientProvider messages={messages}>
          <PostsProvider>
            <UsersProvider>
              <Header />
              {children}
              <ScrollToTopButton />
            </UsersProvider>
          </PostsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
