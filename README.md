# 🚀 TerangaID - Votre Identité Numérique Sécurisée

Bienvenue sur le projet `walletfront` de TerangaID ! Cette application mobile, développée avec React Native et TypeScript, vise à offrir une plateforme sécurisée pour la gestion de votre identité numérique.

## ✨ Fonctionnalités Implémentées

Nous avons mis en place les bases solides pour une expérience utilisateur fluide et sécurisée :

-   **Page d'Accueil Intuitive** : Une vitrine élégante pour l'application, offrant un accès direct aux fonctionnalités d'inscription et de connexion.
-   **Formulaire d'Inscription Complet** : Un processus d'enregistrement guidé avec des validations en temps réel pour garantir la qualité des données :
    -   **Numéro de CNI (NIN)** : Validation de la longueur (13 ou 14 chiffres).
    -   **Numéro de Téléphone International** : Intégration d'un sélecteur de pays avec affichage du drapeau et validation du format spécifique à chaque pays.
    -   **Mot de Passe Sécurisé** : Vérification en direct des critères de robustesse (longueur minimale, majuscule, chiffre, caractère spécial).
-   **Gestion du Thème (Clair/Sombre)** : Un bouton dédié en haut à droite de l'écran permet de basculer entre un thème clair et un thème sombre, avec persistance du choix de l'utilisateur. Tous les composants s'adaptent dynamiquement au thème sélectionné.
-   **Navigation Robuste** : Mise en place d'une navigation fluide entre les écrans d'accueil, d'inscription et de connexion.

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

-   [Node.js](https://nodejs.org/en/) (version 18 ou supérieure)
-   [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
-   [React Native CLI](https://reactnative.dev/docs/environment-setup) (`npm install -g react-native-cli`)
-   [Android Studio](https://developer.android.com/studio) (pour l'émulateur Android et les outils de build)
-   [Xcode](https://developer.apple.com/xcode/) (pour le simulateur iOS et les outils de build, macOS uniquement)

## 🚀 Installation et Lancement

Suivez ces étapes pour configurer et lancer l'application sur votre machine locale :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/MADENIYOU/frontend-wallet.git
    cd frontend-wallet
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
    _Note : Un patch pour le composant de numéro de téléphone sera automatiquement appliqué lors de l'installation pour assurer l'affichage correct des drapeaux._

3.  **Lancer l'application :**

    Assurez-vous d'avoir un émulateur Android ou un simulateur iOS en cours d'exécution.

    -   **Pour Android :**
        ```bash
        npx react-native run-android
        ```

    -   **Pour iOS (macOS uniquement) :**
        ```bash
        cd ios && bundle install && bundle exec pod install && cd ..
        npx react-native run-ios
        ```

    _Si vous rencontrez des problèmes de port déjà utilisé, assurez-vous qu'aucune autre instance de Metro Bundler n'est en cours d'exécution._

## 💡 Utilisation

-   **Navigation :** Utilisez les boutons sur la page d'accueil pour naviguer vers les écrans d'inscription ou de connexion.
-   **Formulaire d'Inscription :** Remplissez les champs et observez les validations en temps réel. Le bouton "S'inscrire" s'activera une fois toutes les conditions remplies.
-   **Changement de Thème :** Cliquez sur l'icône 🌙/☀️ en haut à droite de la barre de navigation pour basculer entre le mode clair et le mode sombre.

## 🔜 Prochaines Étapes

-   **Page de Connexion :** La page de connexion est actuellement un placeholder. Elle sera développée ultérieurement pour permettre l'authentification des utilisateurs.
-   **Améliorations Esthétiques :** Affinements supplémentaires de l'interface utilisateur pour une expérience encore plus agréable.

---