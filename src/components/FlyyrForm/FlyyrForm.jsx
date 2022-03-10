import { useState } from 'react';

export default function FlyyrForm() {
    const [ formData, setFormData]  = useState({
        flyyrImage: '',
        eventTitle: '',
        promoter: '',
        designer: '',
        talent: '',
        venue: '',
        address: '',
        startDateTime: '',
        endDateTime: '',
        eventDetails: '',
        ticketingLink: '',
    });

    handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            
            
        } catch {
            
        }
    }


    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Upload Your Flyyr:</label>
                    <input type="URL" name="flyyrImage" value={formData.flyyrImage} onChange={handleChange} />
                    <label>Event Title:</label>
                    <input type="text" name="eventTitle" value={formData.eventTitle} onChange={handleChange} required/>
                    <label>Promoter:</label>
                    <input type="text" name="promoter" value={formData.promoter} onChange={handleChange }/>
                    <label>Talent (i.e. DJ's, Performers, Hosts): </label>
                    <input type="text" name="talent" value={formData.talent} onChange={handleChange} />
                    <label>Flyyr Designer</label>
                    <input type="text" name="designer" value={formData.designer} onChange={handleChange} required/>
                    <label>Venue:</label>
                    <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    <label>Start Date and Time:</label>
                    <input type="text" name="startDateTime" value={formData.startDateTime} onChange={handleChange} required />
                    <label>End Date and Time:</label>
                    <input type="text" name="endDateTime" value={formData.endDateTime} onChange={handleChange} />
                    <label>Event Description:</label>
                    <input type="text" name="eventDetails" value={formData.eventDetails} onChange={handleChange} />
                    <label>Link to Ticketing Site:</label>
                    <input type="URL" name="ticketingLink" value={formData.ticketingLink} onChange={handleChange} />
                    <input type="submit" >Post Flyyr!</input>
                </form>
            </div>
        </div>
    );
}