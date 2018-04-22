// src/pages/controller.ts
import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity'

@JsonController()
export default class GameController {

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ) {
        return Game.findOne(id)
    }

    @Get('/games')
    async allGames() {
        const games = await Game.find()
        return { games }
    }

   
}