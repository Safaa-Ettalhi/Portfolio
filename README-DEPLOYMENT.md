# Guide de déploiement sur Vercel avec formulaire de contact

## 📋 Prérequis

1. Un compte Vercel (gratuit) : https://vercel.com
2. Un compte Resend (gratuit) : https://resend.com

## 🚀 Étapes de déploiement

### 1. Configuration Resend

1. Créez un compte sur [Resend](https://resend.com)
2. Allez dans **API Keys** et créez une nouvelle clé API
3. Copiez la clé API (elle commence par `re_`)

### 2. Déploiement sur Vercel

#### Option A : Via l'interface Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com) et connectez votre compte GitHub
3. Cliquez sur **New Project**
4. Importez votre repository
5. Vercel détectera automatiquement les paramètres (Vite/React)
6. Avant de déployer, ajoutez les variables d'environnement :
   - `RESEND_API_KEY` : Votre clé API Resend
   - `CONTACT_EMAIL` : Votre email (ex: `safaeettalhi1@gmail.com`)
7. Cliquez sur **Deploy**

#### Option B : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Ajouter les variables d'environnement
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
```

### 3. Configuration des variables d'environnement sur Vercel

1. Allez dans votre projet sur Vercel
2. Cliquez sur **Settings** → **Environment Variables**
3. Ajoutez :
   - **RESEND_API_KEY** : `re_votre_cle_api`
   - **CONTACT_EMAIL** : `safaeettalhi1@gmail.com`
4. Sélectionnez **Production**, **Preview**, et **Development**
5. Cliquez sur **Save**

### 4. Vérification du domaine d'envoi (Optionnel mais recommandé)

Par défaut, Resend utilise `onboarding@resend.dev`. Pour un usage en production :

1. Allez sur Resend → **Domains**
2. Ajoutez votre domaine (ex: `votreportfolio.com`)
3. Suivez les instructions pour vérifier le domaine
4. Mettez à jour `api/send-email.js` ligne 27 :
   ```javascript
   from: 'Portfolio Contact <contact@votreportfolio.com>',
   ```

## 🧪 Tester le formulaire

1. Une fois déployé, visitez votre site
2. Remplissez le formulaire de contact
3. Vérifiez votre boîte mail (y compris les spams)

## 📝 Notes importantes

- **Limite gratuite Resend** : 100 emails/jour, 3000 emails/mois
- **Limite gratuite Vercel** : Illimitée pour les sites statiques
- Les emails peuvent prendre quelques secondes à arriver
- Vérifiez vos spams si vous ne recevez pas les emails

## 🔧 Dépannage

### L'email n'arrive pas
- Vérifiez que `RESEND_API_KEY` est correctement configurée
- Vérifiez les logs Vercel : **Deployments** → Cliquez sur votre déploiement → **Functions** → `api/send-email`
- Vérifiez votre dossier spam

### Erreur 500
- Vérifiez que toutes les variables d'environnement sont définies
- Vérifiez que la clé API Resend est valide
- Consultez les logs Vercel pour plus de détails

### Erreur CORS
- Les headers CORS sont déjà configurés dans l'API
- Si problème persiste, vérifiez `vercel.json`

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Resend](https://resend.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)

