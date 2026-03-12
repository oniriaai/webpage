// app/[locale]/not-found.tsx
import { useTranslations } from 'next-intl';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import Link from 'next/link';

export default function LocaleNotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">
            404
          </CardTitle>
          <CardDescription className="text-center text-lg">
            {t('title')}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            {t('description')}
          </p>
          <Button asChild>
            <Link href="/">
              {t('backHome')}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}