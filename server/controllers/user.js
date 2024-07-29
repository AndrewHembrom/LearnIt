export const register = async (req, res) => { 
    try {
        res.send("Registered API")
    } catch (error) { 
        res.status(500).json({
            message: error.message
        })
    }
}