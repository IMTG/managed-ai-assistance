document.addEventListener('DOMContentLoaded', function () {
    function loadScript(src, callback, isModule = false) {
        var script = document.createElement('script');
        script.type = isModule ? 'module' : 'text/javascript';
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function loadStylesheet(href) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // Load all stylesheets
    loadStylesheet('https://cdn.jsdelivr.net/gh/IMTG/managed-ai-assistance@LanHub-CIT/custom.css?id=2');
    loadStylesheet('https://cdn.jsdelivr.net/gh/IMTG/managed-ai-assistance@nocache=2/AddOnChatBotStyle.css?id=34');
    loadStylesheet('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
    loadStylesheet('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
    loadStylesheet('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chat');

    // Load jQuery
    loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', function () {
        // Use dynamic import for the module
        import('https://cdn.jsdelivr.net/gh/IMTG/managed-ai-assistance@LanHub-CIT/chatbot.js')
            .then(({ createChat }) => {
                createChat({
                    webhookUrl: 'https://primary-production-4c7d.up.railway.app/webhook/49b210ac-ced2-4083-a4c7-398764919723/chat',
                    i18n: {
                        en: {
                            title: 'AI Assistant',
                            subtitle: '',
                            footer: '',
                            getStarted: 'New Conversation',
                            inputPlaceholder: 'Type your question..',
                        }
                    }
                });
                loadScript('https://cdn.jsdelivr.net/gh/IMTG/managed-ai-assistance@LanHub-CIT/addOnFeature.js');
            })
            .catch((err) => {
                console.error("Error loading chatbot module:", err);
            });
    });

});
