import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    return [
      new Route("Route 1", {"lat":10.5, "lng":20.6}, {"lat":30.5, "lng":5.6}),
      new Route("Route 2", {"lat":10.5, "lng":20.6}, {"lat":30.5, "lng":5.6}),
      new Route("Route 3", {"lat":10.5, "lng":20.6}, {"lat":30.5, "lng":5.6}),
      new Route("Route 4", {"lat":10.5, "lng":20.6}, {"lat":30.5, "lng":5.6}),
      new Route("Route 5", {"lat":10.5, "lng":20.6}, {"lat":30.5, "lng":5.6}),
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
