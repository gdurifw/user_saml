OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Desat",
    "X.509 certificate of the Service Provider" : "X.509 El certificat d'aquest servidor és invàlid",
    "Private key of the Service Provider" : "Clau privada del proveïdor de serveis",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que la identificació del nom de la <samlp: logout Request> enviada per aquest SP serà xifrada.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica si es signaran els missatges <samlp: AuthnRequest> enviats per aquest SP. [Les metadades del SP oferiran aquesta informació]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica si els signes <samlp: logoutRequest> enviats per aquest SP seran signats.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica si es signaran els missatges <samlp: logoutResponse> enviats per aquest SP.",
    "Whether the metadata should be signed." : "s'han de signar les metadades.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica un requisit per a la signatura de la <samlp: Response>, <samlp: Output Request> i <samlp: Output Response> elements rebuts per aquest SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica un requisit per a la signatura dels elements <saml: Assertion> rebuts per aquest SP. [Les metadades del SP oferiran aquesta informació]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica un requisit perquè els elements <saml: Assertion> rebuts per aquest SP es codifiquin.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica un requisit per a l'element NameID de la resposta SAML rebuda per aquest SP per estar present.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica un requisit perquè l'encriptació de nom d'aquest SP sigui xifrada.",
    "Indicates if the SP will validate all received XML." : "Indica si el SP validarà tots els XML rebuts.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL: codifica les dades SAML com a minúscules, i el kit d'eines per defecte usa majúscules. Activa la compatibilitat ADFS sobre la verificació de la signatura.",
    "Attribute to map the UID to." : "Atribut per assignar un UID a.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Només permetre l'autenticació si hi ha un compte en un altre suport. (p. ex., LDAP)",
    "Attribute to map the displayname to." : "Atribut per assignar el nom de la pantalla a.",
    "Attribute to map the email address to." : "Atribut per assignar l'adreça de correu electrònic a.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Utilitzeu l'autenticació SAML per als clients %s (requereix una autenticació de l'usuari)",
    "SSO & SAML authentication" : "Autenticació SSO & SAML",
    "Open documentation" : "Obre la documentació",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Trieu si voleu autenticar amb el proveïdor de SAML incorporat a Nextcloud o si voleu autenticar-se amb una variable d'entorn.",
    "Use built-in SAML authentication" : "Utilitzeu l'autenticació SAML integrada",
    "Use environment variable" : "Utilitza la variable d'entorn",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Assegureu-vos de configurar un usuari administratiu que pugui accedir a la instància mitjançant SSO. %sInicieu sessió amb el vostre compte normal ",
    "General" : "General",
    "Service Provider Data" : "Dades del proveïdor de serveis",
    "If your Service Provider should use certificates you can optionally specify them here." : "Si el vostre proveïdor de serveis ha d'utilitzar certificats, podeu especificar-los aquí.",
    "Show Service Provider settings…" : "Dades del proveïdor de serveis",
    "Identity Provider Data" : "Dades del proveïdor de serveis",
    "Configure your IdP settings here." : "Configureu aquí la configuració d'IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Identificador de l'entitat IdP (ha de ser un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Orientació URL de l'IdP on SP enviarà el missatge de sol·licitud d'autenticació",
    "Show optional Identity Provider settings…" : "Dades del proveïdor de serveis",
    "URL Location of the IdP where the SP will send the SLO Request" : "Ubicació URL de l'IdP on SP enviarà la sol·licitud SLO",
    "Public X.509 certificate of the IdP" : "Certificat públic X.509 de l'IdP",
    "Attribute mapping" : "atributs",
    "If you want to optionally map attributes to the user you can configure these here." : "Si voleu assignar atributs a l'usuari opcionalment, podeu configurar-los aquí.",
    "Show attribute mapping settings…" : "Mostra la configuració del mapa d'atributs ...",
    "Security settings" : "Configuració de seguretat",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Per a una major seguretat, us recomanem que activeu la configuració següent si l'accepta el vostre entorn.",
    "Show security settings…" : "Mostra la configuració de seguretat ...",
    "Signatures and encryption offered" : "Firmes i encriptació oferts",
    "Signatures and encryption required" : "S'han de signar i xifrar",
    "Download metadata XML" : "Descarrega metadades XML",
    "Metadata invalid" : "Les metadades no són vàlides",
    "Metadata valid" : "Les metadades vàlides",
    "Account not provisioned." : "Compte no subministrat.",
    "Your account is not provisioned, access to this service is thus not possible." : "El vostre compte no és possible accedir ",
    "Indicates if the SP will validate all received XMLs." : "Indica si el SP validarà tots els XML rebuts.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Només permetre l'autenticació si hi ha un compte en un altre suport. (p. ex., LDAP)",
    "Show Service Provider settings ..." : "Dades del proveïdor de serveis",
    "Show optional Identity Provider settings ..." : "Dades del proveïdor de serveis",
    "Show security settings ..." : "Mostra la configuració de seguretat ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Si voleu assignar automàticament atributs SAML a l'usuari, podeu configurar-los aquí.",
    "Show attribute mapping settings ..." : "Mostra la configuració del mapa d'atributs ..."
},
"nplurals=2; plural=(n != 1);");
