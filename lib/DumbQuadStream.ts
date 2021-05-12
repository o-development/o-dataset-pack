import { Stream, BaseQuad } from "rdf-js";
import { EventEmitter } from "events";

export default class DumbQuadStream<InAndOutQuad extends BaseQuad = BaseQuad>
  extends EventEmitter
  implements Stream<InAndOutQuad> {
  read(): InAndOutQuad | null {
    return null;
  }
}
