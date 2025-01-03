function popup () {
    return(
        <>

<div className="popup">
          <div className="popup-content">
            <h3>Add your art works</h3>
            <input
              type="file"
              onChange={handleFileUpload}
              className="file-input"
            />
            <div className="popup-actions">
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button className="upload-submit-button">
                Upload Your Work
              </button>
            </div>
          </div>
        </div>
        </>
    )
}