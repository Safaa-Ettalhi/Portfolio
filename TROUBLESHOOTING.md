# Guide de dépannage - Formulaire de contact

## Erreur : "Erreur lors de l'envoi de l'email"

Si vous rencontrez cette erreur après le déploiement sur Vercel, suivez ces étapes :

### 1. Vérifier les variables d'environnement sur Vercel

1. Allez sur votre projet Vercel : https://vercel.com/dashboard
2. Cliquez sur votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Vérifiez que vous avez bien ces deux variables :
   - `RESEND_API_KEY` : Votre clé API Resend (commence par `re_`)
   - `CONTACT_EMAIL` : Votre email (ex: `safaeettalhi1@gmail.com`)

### 2. Vérifier que les variables sont actives pour Production

- Cochez **Production**, **Preview**, et **Development**
- Cliquez sur **Save**

### 3. Redéployer après avoir ajouté les variables

Après avoir ajouté/modifié les variables d'environnement :
1. Allez dans **Deployments**
2. Cliquez sur les **3 points** du dernier déploiement
3. Cliquez sur **Redeploy**

### 4. Vérifier votre clé API Resend

1. Allez sur https://resend.com/api-keys
2. Vérifiez que votre clé API est **active**
3. Si nécessaire, créez une nouvelle clé API
4. Copiez la nouvelle clé et mettez à jour `RESEND_API_KEY` sur Vercel

### 5. Vérifier les logs Vercel

1. Allez dans **Deployments** sur Vercel
2. Cliquez sur votre dernier déploiement
3. Allez dans l'onglet **Functions**
4. Cliquez sur `api/send-email`
5. Regardez les logs pour voir l'erreur exacte

### 6. Erreurs courantes

#### "You can only send testing emails to your own email address"
- **Solution** : En mode test, Resend n'autorise l'envoi qu'à l'email de votre compte Resend
- **Option 1** : Utilisez votre email Resend comme `CONTACT_EMAIL` (celui avec lequel vous vous êtes inscrit)
- **Option 2** : Vérifiez un domaine sur https://resend.com/domains et changez le `from` pour utiliser votre domaine
- **Option 3** : Passez à un plan payant Resend pour envoyer à n'importe quelle adresse

#### "RESEND_API_KEY is not set"
- **Solution** : Ajoutez la variable `RESEND_API_KEY` dans Vercel et redéployez

#### "Invalid API key"
- **Solution** : Vérifiez que votre clé API Resend est correcte et active

#### "Domain not verified"
- **Solution** : Par défaut, Resend utilise `onboarding@resend.dev`. Pour la production, vérifiez votre domaine sur Resend

#### "Rate limit exceeded"
- **Solution** : Vous avez atteint la limite d'emails gratuits (100/jour). Attendez ou passez à un plan payant

### 7. Tester l'API directement

Vous pouvez tester l'API avec curl :

```bash
curl -X POST https://votre-site.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Message de test"
  }'
```

### 8. Vérifier la console du navigateur

1. Ouvrez votre site déployé
2. Ouvrez les **Outils de développement** (F12)
3. Allez dans l'onglet **Console**
4. Remplissez le formulaire et envoyez
5. Regardez les erreurs dans la console

### 9. Contact support

Si le problème persiste :
- Vérifiez les logs Vercel (section Functions)
- Vérifiez votre compte Resend pour les erreurs
- Vérifiez que votre email de destination est correct

