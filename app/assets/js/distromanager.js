const { DistributionAPI } = require('helios-core/common')
const version = '1.0.9-pre.1'

const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = `https://api.launcher.japsik.com/v1/distribution?version=${version}`

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api