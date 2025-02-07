const { DistributionAPI } = require('helios-core/common')
const version = '1.0.6'

const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = `https://api.japsik.com/launcher/${version}/version`

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api