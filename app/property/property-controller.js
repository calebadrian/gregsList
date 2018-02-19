function PropertyController(){


    var addFormElem = document.getElementById('add-form')

    this.getProperties = function getProperties(){
        var template = ''
        template += `
        <button class="btn btn-success" data-target="#addPropertyModal" data-toggle="modal">Add Property</button>
                <div class="modal fade" id="addPropertyModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Property</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onsubmit="app.controllers.propCtrl.makeProperty(event)">
                                <div class="form-group">
                                    <label for="year">Year:</label>
                                    <input type="text" name="year" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="price">Price:</label>
                                    <input type="text" name="price" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="img">Picture Url:</label>
                                    <input type="text" name="img" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success">Add Property</button>
                                    <button type="reset" class="btn btn-danger">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
        addFormElem.innerHTML = template
    }
}