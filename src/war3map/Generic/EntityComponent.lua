local ____exports = {}
____exports.EntityComponent = {}
local EntityComponent = ____exports.EntityComponent
EntityComponent.name = "EntityComponent"
EntityComponent.__index = EntityComponent
EntityComponent.prototype = {}
EntityComponent.prototype.__index = EntityComponent.prototype
EntityComponent.prototype.constructor = EntityComponent
function EntityComponent.new(...)
    local self = setmetatable({}, EntityComponent.prototype)
    self:____constructor(...)
    return self
end
function EntityComponent.prototype.____constructor(self, parent)
    self.parent = parent
    self.parent:addComponent(self)
end
return ____exports
