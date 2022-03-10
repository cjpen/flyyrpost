export default function UploadFlyyrForm() {

    async function handleSubmit() {}

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Event Title</label>
                    <input type="text" name="eventTitle" />
                    <label></label>
                    <input type="text" name="" />
                    <label></label>
                    <input type="text" name="" />
                    <label></label>
                    <input type="text" name="" />
                    <input type="submit" onSubmit={handleSubmit}>Post Flyyr!</input>
                </form>
            </div>
        </div>
    );
}