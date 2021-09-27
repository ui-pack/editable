import coreConfig from "../config.js"

export default function cleanup(config) {
  if(!config.name && !config.container) {
    throw new Error("Cannot perform cleanup on empty configuration. Check that it includes a name or container property")
  }

  const container = config.container || document.querySelector(`[data-${coreConfig.library}="${config.name}"]`)
  container.remove()
}