function CrudController(){

    var crudService = new CrudService()
    var carsElem = document.getElementById('car-display')
    var addFormElem = document.getElementById('add-form')

    function draw(cars){
        var template = ''
        cars.forEach(car => {
            template += `
            <div class="col-sm-3">
                <div class="card full-width">
                    <img class="card-img-top" src="${car.img}">
                    <div class="card-body">
                        <h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
                        <button class="btn btn-info" onclick="app.controllers.crudCtrl.showEditCarForm('${car.id}')">Edit Car</button>
                        <button class="btn btn-danger" onclick="app.controllers.crudCtrl.removeCar('${car.id}')">Remove Car</button>
                        <form onsubmit="app.controllers.crudCtrl.editCar(event)" id="edit-${car.id}" class="hidden">
                        <div class="form-group hidden">
					        <label for="id">id:</label>
					        <input type="text" name="id" class="form-control" required value="${car.id}" readonly>
				        </div>
                        <div class="form-group">
                            <label for="make">Make:</label>
                            <input type="text" name="make" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="model">Model:</label>
                            <input type="text" name="model" class="form-control" required>
                        </div>
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
                            <button type="submit" class="btn btn-info">Edit Car</button>
                            <button type="reset" class="btn btn-danger">Clear</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>`
        })
        carsElem.innerHTML = template
    }

    this.makeCar = function makeCar(event, cb){
        event.preventDefault()
        var form = event.target
        crudService.makeCar(form, draw)
        form.reset()
    }

    // this.checkCar = function checkCar(){
    //     if (found == true){
    //         crudService.makeCar()
    //     } else {
    //         return
    //     }
    // }

    this.removeCar = function removeCar(id){
        crudService.removeCar(id, draw)
    }

    this.showEditCarForm = function showEditCarForm(id){
        var form = document.getElementById('edit-' + id)
        form.classList.remove('hidden')
    }

    this.editCar = function editCar(event){
        event.preventDefault()
        crudService.editCar(event.target, draw)
    }

    this.getAutos = function getAutos(){
        var template = ''
        template += `
        <button class="btn btn-success" data-target="#addCarModal" data-toggle="modal">Add Car</button>
                <div class="modal fade" id="addCarModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Car</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onsubmit="app.controllers.crudCtrl.makeCar(event)">
                                <div class="form-group">
                                    <label for="make">Make:</label>
                                    <input type="text" name="make" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="model">Model:</label>
                                    <input type="text" name="model" class="form-control" required>
                                </div>
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
                                    <button type="submit" class="btn btn-success">Add Car</button>
                                    <button type="reset" class="btn btn-danger">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
        addFormElem.innerHTML = template
        crudService.getCars(draw)
    }
    this.getAutos()
}