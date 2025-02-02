const { DistributionAPI } = require('helios-core/common')
const version = '1.0.5-pre.1'

const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = `https://api.japsik.xyz/launcher/${version}/version`
// exports.REMOTE_DISTRO_URL = `https://raw.githubusercontent.com/Japsik-Server/JapsikLauncher-Data/refs/heads/main/live/distribution.json`

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api