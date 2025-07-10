# 🚀 TerangaID - Votre Identité Numérique Sécurisée

Bienvenue dans le monde de **TerangaID** ! 🌍 Ce projet est le `frontend` de notre application mobile, conçue pour révolutionner la gestion de votre identité numérique. Développée avec la puissance de **React Native** et la rigueur de **TypeScript**, TerangaID vous offre une expérience utilisateur fluide, sécurisée et intuitive.

## ✨ Fonctionnalités Clés & Expérience Utilisateur

Nous avons mis en place les fondations solides pour une interaction utilisateur exceptionnelle :

### 🏠 Page d'Accueil (Vitrine)

Une première impression mémorable ! Notre page d'accueil est une vitrine élégante et accueillante pour l'application. Elle offre un accès direct et clair aux deux actions principales :

-   **`Créer un compte`** : Pour les nouveaux utilisateurs désireux de rejoindre TerangaID.
-   **`Se connecter`** : Pour les utilisateurs existants souhaitant accéder à leur espace.

### 📝 Formulaire d'Inscription (Sécurité & Validation)

Un processus d'enregistrement simplifié, mais rigoureux, pour garantir la qualité et la sécurité de vos informations. Chaque champ est validé en temps réel pour une expérience sans frustration :

-   **Numéro de CNI (NIN)** : 🆔
    -   **Validation en direct** : Le champ vérifie automatiquement si le numéro saisi respecte la longueur requise (13 ou 14 chiffres), avec un feedback visuel instantané.
    -   _Exemple de feedback_ : `Le NIN doit contenir 13 ou 14 chiffres.`

-   **Numéro de Téléphone International** : 📞
    -   **Sélecteur de Pays Intelligent** : Choisissez votre pays parmi une liste complète. L'application affiche automatiquement le **drapeau** 🇸🇳 et le **code d'appel international** (+221) du pays sélectionné.
    -   **Validation Spécifique au Pays** : La longueur et le format du numéro de téléphone sont validés en fonction des standards internationaux du pays choisi, assurant une précision maximale.
    -   _Exemple de feedback_ : `Le numéro de téléphone doit être valide.`

-   **Mot de Passe Sécurisé** : 🔒
    -   **Indicateurs de Robustesse en Temps Réel** : À chaque caractère saisi, l'application évalue la force de votre mot de passe et affiche une liste de critères (longueur, majuscule, chiffre, caractère spécial) qui se mettent à jour dynamiquement.
    -   _Critères de validation_ :
        -   `✔ Au moins 10 caractères`
        -   `✔ Au moins une majuscule`
        -   `✔ Au moins un chiffre`
        -   `✔ Au moins un caractère spécial`

-   **Bouton `S'inscrire`** : Ce bouton reste désactivé tant que tous les champs ne sont pas correctement remplis et que toutes les conditions de validation ne sont pas satisfaites. Une fois activé, il vous redirige vers la page de connexion.

### 🌓 Gestion du Thème (Clair / Sombre)

Personnalisez votre expérience visuelle ! Un bouton intuitif situé en haut à droite de la barre de navigation vous permet de basculer instantanément entre le mode clair ☀️ et le mode sombre 🌙. Votre préférence est sauvegardée et persistante, même après la fermeture de l'application. Tous les éléments de l'interface s'adaptent harmonieusement au thème choisi.

### 🗺️ Navigation Robuste

Une architecture de navigation bien pensée assure des transitions fluides et une expérience utilisateur cohérente entre les différents écrans de l'application.

## 🛠️ Prérequis Techniques

Pour faire tourner ce projet sur votre machine, assurez-vous d'avoir les outils suivants installés et configurés :

-   **Node.js** (version 18 ou supérieure) : [Télécharger Node.js](https://nodejs.org/en/)
-   **npm** (Node Package Manager) : Généralement inclus avec Node.js.
-   **React Native CLI** : Installez-le globalement via `npm install -g react-native-cli`.
-   **Android Studio** : Indispensable pour l'émulateur Android et les outils de build spécifiques à Android. [Télécharger Android Studio](https://developer.android.com/studio)
-   **Xcode** (pour les utilisateurs macOS) : Nécessaire pour le simulateur iOS et les outils de build iOS. Disponible sur l'App Store.

## 🚀 Guide d'Installation et de Lancement

Suivez ces étapes simples pour mettre l'application en marche :

1.  **Cloner le dépôt GitHub :**
    ```bash
    git clone https://github.com/MADENIYOU/frontend-wallet.git
    cd frontend-wallet
    ```

2.  **Installer les dépendances du projet :**
    ```bash
    npm install
    ```
    > 💡 **Note Importante** : Un patch spécifique pour le composant `react-native-phone-number-input` sera automatiquement appliqué durant cette étape. Ce patch est crucial pour garantir l'affichage correct des drapeaux des pays dans le sélecteur de numéro de téléphone.

3.  **Lancer l'application sur un émulateur/simulateur :**

    Assurez-vous qu'un émulateur Android (via Android Studio) ou un simulateur iOS (via Xcode) est déjà en cours d'exécution.

    -   **Pour Android :**
        ```bash
        npx react-native run-android
        ```

    -   **Pour iOS (macOS uniquement) :**
        ```bash
        # Installer les dépendances CocoaPods (une seule fois ou après mise à jour des dépendances natives)
        cd ios && bundle install && bundle exec pod install && cd ..
        # Lancer l'application iOS
        npx react-native run-ios
        ```

    > ⚠️ **Dépannage** : Si vous rencontrez l'erreur `address already in use :::8081`, cela signifie qu'une autre instance du Metro Bundler est déjà active. Veuillez la fermer manuellement avant de relancer la commande.

## 🎯 Comment Utiliser l'Application

Explorez les fonctionnalités implémentées :

-   **Navigation** : Sur la page d'accueil, utilisez les boutons `Créer un compte` et `Se connecter` pour explorer les différentes sections de l'application.
-   **Formulaire d'Inscription** : Testez les validations en temps réel en saisissant des informations dans les champs CNI, Téléphone et Mot de passe. Observez comment le bouton `S'inscrire` s'active ou se désactive.
-   **Changement de Thème** : Cliquez sur l'icône 🌙 ou ☀️ dans la barre de navigation supérieure pour voir l'application basculer instantanément entre les modes clair et sombre.

## 🔜 Prochaines Étapes & Améliorations Futures

Notre feuille de route inclut les développements suivants :

-   **Page de Connexion** : L'implémentation complète de la logique d'authentification pour la page de connexion.
-   **Améliorations Esthétiques** : Des affinements continus de l'interface utilisateur pour une expérience visuelle encore plus polie et agréable.
-   **Fonctionnalités d'Identité Numérique** : Intégration des services clés de TerangaID.

---