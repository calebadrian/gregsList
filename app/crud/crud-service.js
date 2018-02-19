function CrudService(){

    var url = '//localhost:3000/api/autos'
    var localCars = []
    var localModels = []

    function Car(formData){
        this.make = formData.make.value
        this.model = formData.model.value
        this.year = formData.year.value
        this.price = formData.price.value
        this.img = formData.img.value
    }

    this.getCars = function getCars(cb){
        $.get(url)
            .then(cars => {
                localCars = cars
                cb(localCars)
            })
    }

    this.makeCar = function makeCar(formData, cb){
        var car = new Car(formData)
        $.post(url, car)
            .then(newCar => {
                this.getCars(cb)
            })
    }

    this.removeCar = function removeCar(id, cb){
        $.ajax({
            url: url + '/' + id,
            method: 'DELETE'
        })
            .then(res => {
                this.getCars(cb)
            })
    }

    this.editCar = function editCar(formData, cb){
        $.ajax({
            url: url + '/' + formData.id.value,
            method: 'PUT',
            data: new Car(formData)
        })
            .then(res => {
                this.getCars(cb)
            })
    }
}