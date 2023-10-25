function addCarToAgent(agent, brand, model, color, power) {
    if (
        typeof agent !== 'object' ||
        typeof brand !== 'string' ||
        typeof model !== 'string' ||
        typeof color !== 'string' ||
        typeof power !== 'string'
    ) 
    {
        console.error('Error: Invalid Inputs for the function addCarToAgent');
        return null;
    }
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };
    return agent;
}
var agent = {}; 
var updatedAgent = addCarToAgent(agent, "Aston Martin", "DB5", "Grey", "285bhp");
if (updatedAgent !== null) {
    shareThatBeauty(updatedAgent); 
}

