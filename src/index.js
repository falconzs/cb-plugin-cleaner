
var DefineClass = require('define-class'),
    PluginAbstract = require('cb-framework').pluginAbstract,
    CleanerPlugin = DefineClass(PluginAbstract, {

        init: function() {
            this.commands = {
                cleanup: {
                    access: ['host', 'mod'],
                    handler: this.cleanup,
                    description: '',
                    params: /(\d+)/
                }
            };
            this._super();
        },

        cleanup: function(fromUser, quantity) {
            var count,
                backgroundColor = this.library.colors.blue;
            if (!quantity || !Number.parseInt(quantity, 10)) {
                quantity = 30;
            }
            for (count = 1; count <= quantity; count++) {
                this.api.sendNotice("Cleaning up chat...", '', backgroundColor);
            }
            this.api.sendNotice("Chat cleaned up.", '', backgroundColor);
        }
    });

module.exports = CleanerPlugin;
